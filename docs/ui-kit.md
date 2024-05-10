# UI kit

---

## Table of Contents

- [UI kit](#ui-kit)
  - [Introduction](#introduction)
  - [Dependencies](#dependencies)

---

## Introduction

The project is using [shadcn/ui](https://ui.shadcn.com) components _[Documentation](https://ui.shadcn.com/docs/components/)_

Configuration for CLI setup is located in `components.json`

Use the `add` command to add components and dependencies to your project: `pnpx shadcn-ui@latest add [component]`

## Dependencies

1. [Radix library](https://www.radix-ui.com/) low-level UI component library
1. [Sonner](https://sonner.emilkowal.ski/) toast component
1. [CVA](https://cva.style/docs) helper to build components with multiple variants
1. `cn` helper function in `@/utils/cn` uses `tailwind-merge` and `clsx`
