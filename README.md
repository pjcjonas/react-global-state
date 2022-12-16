## Prerequisites

To create a React TypeScript project with [Vite](https://vitejs.dev/) using the npm create command, you will need to have the following prerequisites installed on your system:

- Node.js and npm: Vite is built on top of Node.js and npm, so you will need to have these installed in order to use the npm create command.
- TypeScript: Vite supports TypeScript out of the box, so you will need to have TypeScript installed in order to create a React TypeScript project with Vite.
- Vite: You will need to have the latest version of Vite installed on your system in order to use the npm create command to create a React TypeScript project with Vite. You can install Vite using the `npm install -g vite` command.


## Setting up your React Typescript Application with Vite

[Material UI](https://mui.com) was used for the ui elements. The login template we replicated from the [MUI github template example](https://github.com/mui/material-ui/blob/v5.11.0/docs/data/material/getting-started/templates/sign-in/SignIn.tsx).

1. Create a React TypeScript project with **Vite** using the `npm create vite-app <project-name> --template react-ts` command. This will create a new project with the specified project name, using the React - TypeScript template provided by Vite.
2. Create a React TS application with Vite using the following command: `npm create vite@latest react-global-state` and select React in the list
3. Once React is selected, select `Typescript` from the list of variants
4. After the project is created, `cd` into `react-global-state` and run the following commands. `npm install` followed by `npm run dev`.

```bash
-\react-global-state
├── index.html
├── LICENSE
├── package.json
├── public # public assets like images
├── src # Application srouce
|  ├── App.tsx # Main application render
|  ├── components # Application components
|  |  ├── Admin
|  |  |  └── index.tsx # Admin component
|  |  ├── Home
|  |  |  └── index.tsx # Welcome page component
|  |  └── Login
|  |     └── index.tsx # Login Component
|  ├── main.tsx # Application entry point
|  └── vite-env.d.ts # Vite Application Import type references (scss, svg, xml, json ....)
├── tsconfig.json # Typescript configuration
├── tsconfig.node.json # Typescipt node configuration
└── vite.config.ts # Vite application config
```
