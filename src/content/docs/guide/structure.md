---
title: Evaluate the Structure
sidebar:
  order: 2
---

When using TangleGuard you will see various graph diagrams which show the packages or modules of your application.

Each diagram represents a different view of your architecture, but the main focus is always the coupling and cohesion. With those you can make assumptions about the quality of your system regarding maintainability and flexibility.

- Try to identify how tightly or loosely coupled different parts of your system are.
- Look for patterns of high cohesion within modules — or the lack thereof.
- Diagrams showing high coupling may indicate areas where responsibilities are spread across too many components.
- Loose coupling and strong cohesion typically signal a more maintainable and modular design.

Understanding these diagrams is key to identifying architectural drift, erosion, and opportunities for improvement.

## Easy to maintain

Best you group your source code in a way that the components are cohesive and loosely coupled.
Below you see how this would look like [1].
You get such structure for example when applying domain driven design (DDD).
![High cohesion, loose coupling](../../../assets/definitions/coupling3.png)

## Harder to maintain

A simple and common architectural style is the layered architecture as mentioned above.
If you don't separate your code regarding feature or domain concerns, but rather regarding technical concerns, you will end up with a system which looks like the illustration below [1].
For each bug fix or feature you normally have to touch multiple components across the codebase which can easily lead to merge conflicts when working in a team.
![Low cohesion, loose coupling](../../../assets/definitions/coupling2.png)

## Impossible to maintain

Below you see how an application can look like when you don't separate at all [1].
You can what's often referred to as a "spaghetti code" or "god object".
This is very difficult to understand and hence maintain and proper isolated tests are very hard to write.
![High cohesion, tight coupling](../../../assets/definitions/coupling1.png)
