## Citrusbyte Mobile app

Prototype exercise.

Client app that consumes information regarding devices register in the system, allowing the user to see all the information and modify the different controls each device they have.

Each interaction with the device is updated as well in the admin app.

The decision to use `React` and `Next` as the main stack is for quickly development. The current implementation lacks of proper testing and error handling, which would be a crucial part in the real application.

In this example due to the time constraint and been a prototype exercise all the state is handle by the components them self, in a real world application like this I would use `Redux` as the state management.

All the css for the components lives in the components, but this make it difficult to share across components. In a production environment I would have look for a solution that would allow sharing css.

Same for all the `API` calls they are in different files. Is a good practice to put together all this `API` calls in the same file.
