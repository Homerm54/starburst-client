# UI Components

Here dwells all the UI components that are meant to be used as part of the appliaction, think of this folder as a UI library, all the imports can be done via the 1 `index.ts` file, thus, the final import syntaz will look something like:

`import { Buttton } from 'components/ui `.

Every folder represents a UI component, inside the folder, the same general file structure is used:

Component Folder
  | -- index.tsx -> React related code, all the functionality  and logic resides here.
  | -- types.ts -> Typescript interfaces, types, and type declarations for both index and style.
  | -- style.ts -> Style Components style, containers, and all the CSS related stuff.

New components are added as needed for the diferent modules in the app.
