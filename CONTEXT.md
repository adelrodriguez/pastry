# Pastry

Pastry is a simple template for open-source packages that use Bun. It gives package authors a small, consistent starting point without deciding the public API of their package.

## Language

**Pastry**:
The source template maintained in this repository.
_Avoid_: Framework, starter kit

**Template**:
The reusable project state before a package author runs initialization.
_Avoid_: Boilerplate, scaffold

**Generated package**:
An independent open-source package created from the template.
_Avoid_: Pastry project, template instance

**Package author**:
The person or group that creates and maintains a generated package.
_Avoid_: Template user, consumer

**Package consumer**:
A person or project that installs and uses a generated package.
_Avoid_: Package author, template user

**Initialization**:
The one-time transition from the template to a generated package. Initialization applies package identity and removes template-only material.
_Avoid_: Installation, setup

**Template-only material**:
Content that supports initialization or explains Pastry but does not belong to a generated package.
_Avoid_: Generated files, build output
