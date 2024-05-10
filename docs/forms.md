# Forms

## Table of Contents <!-- omit in toc -->

- [Forms](#forms)
  - [Introduction](#introduction)
  - [Rules](#rules)
    - [Do not depend your form's structure on backend's request or response](#do-not-depend-your-forms-structure-on-backends-request-or-response)
    - [Use the `defaultValues` if possible](#use-the-defaultvalues-if-possible)

## Introduction

For building forms we use:

1. [react-hook-form](https://react-hook-form.com/) package which help us to build performant forms with minimal effort.
2. [Zod](https://zod.dev/) validation library with TypeScript support
3. [shadcn/ui form components](https://ui.shadcn.com/docs/components/form)

## Rules

### Do not depend your form's structure on backend's request or response

Often, the backend sends or receives data in a format comfortable for them, but not for the frontend, leading to poorly designed forms. To avoid problems like this, we recommend using the transform function to convert data from the backend to the frontend and vice versa.

Example:

```ts
const backendData = {
  first_name: 'John',
  email: 'some@example.com',
  role_id: 1,
};

// Some code here...

const transformIn = (data) => ({
  firstName: data.first_name,
  email: data.email,
  role: {
    id: data.role_id,
  },
});

const transformOut = (data) => ({
  first_name: data.firstName,
  email: data.email,
  role_id: data.role.id,
});

// Some code here...

const onSubmit = (data) => {
  const transformedData = transformOut(data);
  // Some code here...
};

// Some code here...

const defaultValues = transformIn(backendData);

// Some code here...

const form = useForm({
  defaultValues,
});
```

### Use `defaultValues` if possible

Common case when you fetch data from API to set them as default form values. Them problem is you need to use `reset` function inside `useEffect` if you fetch it inside of the form component.
The suggestion is to create or use another component wrapper or view component and after fetching pass it to form component props where you set it as `defaultValues`. Same thing with `isLoading` and `onSubmit`, better pass it via props.
This will help you to remove fetching responsibility out from form component and reuse it different place with different logic.
