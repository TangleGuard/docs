---
title: Exploration
sidebar:
  order: 1
---

TangleGuard offers the capability to explore the source code as an interactive graph diagram.
It provides you with high level diagrams which shows your declared layers and how their are related to each other and more in depth diagrams for each package, where you can see how your modules are related to each other.

- Workspace visualization as **graph diagram**
- Package and module structure visualizations

TangleGuard reveals the system’s key building blocks and shows you how they depend on one another.
It renders your source code as a directed graph diagram using [Cytoscape.js](https://github.com/cytoscape/cytoscape.js) and the [Dagre layout](https://github.com/cytoscape/cytoscape.js-dagre).

The diagrams are interactive. You can move the nodes and layers around as you like.

## Layers overview

The workspace overview shows the highest level components, which are the layers only.

![Dashboard](../../../assets/dashboard.jpeg)

## Layers and packages

You can also explore the internals of each package.
Each node of the graph represents a package, and the edges represent dependencies between them.

![Layers and packages](../../../assets/packages-within-layers.jpeg)

## Modules within a package

![Metrics](../../../assets/package-internals.jpeg)

## Evaluate the Structure

When using TangleGuard you will see various graph diagrams which show the packages or modules of your application.

Each diagram represents a different view of your architecture, but the main focus is always the coupling and cohesion. With those you can make assumptions about the quality of your system regarding maintainability and flexibility.

- Try to identify how tightly or loosely coupled different parts of your system are.
- Look for patterns of high cohesion within modules — or the lack thereof.
- Diagrams showing high coupling may indicate areas where responsibilities are spread across too many components.
- Loose coupling and strong cohesion typically signal a more maintainable and modular design.

Understanding these diagrams is key to identifying architectural drift, erosion, and opportunities for improvement.

### Easy to maintain

Best you group your source code in a way that the components are cohesive and loosely coupled.
Below you see how this would look like [1].
You get such structure for example when applying domain driven design (DDD).
![High cohesion, loose coupling](../../../assets/definitions/coupling3.png)

### Harder to maintain

A simple and common architectural style is the layered architecture as mentioned above.
If you don't separate your code regarding feature or domain concerns, but rather regarding technical concerns, you will end up with a system which looks like the illustration below [1].
For each bug fix or feature you normally have to touch multiple components across the codebase which can easily lead to merge conflicts when working in a team.
![Low cohesion, loose coupling](../../../assets/definitions/coupling2.png)

### Impossible to maintain

Below you see how an application can look like when you don't separate at all [1].
You can what's often referred to as a "spaghetti code" or "god object".
This is very difficult to understand and hence maintain and proper isolated tests are very hard to write.
![High cohesion, tight coupling](../../../assets/definitions/coupling1.png)

## Examples

Here you see some visualization examples of open-source projects.

For each project you'll first see the an overview of the Cargo workspace.
Each node represents a package from the repository.

For some repositories you'll find examples component diagrams of specific packages.
There, each node represents a module.

### ripgrep

https://github.com/BurntSushi/ripgrep

#### Packages

![ripgrep overview](/images/examples/ripgrep.png)

#### grep-cli

![ripgrep package](/images/examples/ripgrep-grep-cli.png)

#### grep-printer

![ripgrep package](/images/examples/ripgrep-grep-printer.png)

### Spacedrive

https://github.com/spacedriveapp/spacedrive

#### Packages

![Package overview of spacedrive](/images/examples/spacedrive-packages.png)

#### Core

![Package overview of spacedrive](/images/examples/spacedrive-core.png)

### Ruff

https://github.com/astral-sh/ruff

#### Packages

![Ruff](/images/examples/ruff-packages.png)

#### ruff_formatter

![Ruff](/images/examples/ruff-ty.png)

#### ruff_python_formatter

![Ruff](/images/examples/ruff-formatter2.png)

### Vector

https://github.com/vectordotdev/vector

#### Packages

![Vector](/images/examples/vector.png)
