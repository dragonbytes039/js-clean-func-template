# Template: Clean Architecture (Functional & Pragmatic)

**Approach:** Simplified implementation using the functional paradigm.
**Note:** This architecture prioritizes development speed over purity. It assumes some coupling and centralization to reduce boilerplate.



## Folder Structure

### 1. Domain (Core)
The innermost layer. It has no external dependencies. It contains pure business logic.

- **/entities**:
  - Defines **what** your business is.
  - *Focus:* Interfaces (TS) or Types for anemic models, or Classes if rich behavior is required.
- **/repositories**:
  - **Output Ports (Abstractions).**
  - Defines the contracts (interfaces) for data access, not the implementation.
- **/domainServices**:
  - Complex business logic involving multiple entities.
  - Only necessary if using an anemic model.

### 2. Application (Orchestration)
Defines what the system **can do**. Orchestrates data flow to and from the domain.

- **/services**:
  - **Use Case Implementations.**
  - *Functional Focus:* One function per use case (e.g., `createUser`) or a grouping object with multiple functions.
  - Contains application logic, flow validation, and repository calls.
- **/types**:
  - **Input Ports.**
  - Defines the interfaces/signatures that services in this layer must fulfill.
- **/dtos** *(Optional)*:
  - Data Transfer Objects. To simplify, these can be omitted in favor of domain types or anonymous types.

### 3. Adapters (Interface)
Converts data from the format convenient for use cases and entities, to the format convenient for external agents (Web, CLI).

- **Role:** Adapt external input (HTTP Request) to invoke *Application* layer services.
- Contains no business logic, only transformation and delegation.

### 4. Framework (Infrastructure)
Technical details, tools, and configurations. This is where the "dirty" code lives (DB, HTTP server, libs).

- **/Assembly** (Composition Root):
  - **Dependency Injection.**
  - The place where real repositories are instantiated, injected into services, and endpoints are exposed.
  - *Pragmatism:* You can use an external DI library or manual injection ("Dirty Main").
- **/others**:
  - Framework utilities, server configuration, and real repository implementations.

---

### Simplified Flow Summary

1. **Framework** receives HTTP request -> Calls **Adapter**.
2. **Adapter** extracts params -> Calls **Application Service**.
3. **Application Service** executes logic -> Uses **Domain Repository** (interface).
4. **Assembly** ensures the *Repository* (interface) has a real infrastructure implementation at runtime.

