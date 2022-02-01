# API ACCESS POINT

This sub module contains all the code related to the interaction with the Backend API, each folder represents a service or system that the API exposes and is available to be used by the client.

The top level file (`index.ts`) exposes the top level functions that the client can use, this functions are developed in a way that a single call should be enough to perform a whole action, and thus, keeping the comunication logic outside of the React components.

Doing this eases the process of building, debugging, scaling and development of the application, and helps to keep the components simple and focused on handeling the user interaction and displaying the information needed.

For situations where a value is updated constantly, the module implements the **Observer** pattern, to update, when needed, the UI of the user.
