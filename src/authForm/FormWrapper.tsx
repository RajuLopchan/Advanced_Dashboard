import { FormProvider } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import React from "react"
import { schema, type LoginForm } from "../pages/authentication/Schema"

interface FormWrapperProps {
  children: React.ReactNode;
  onSubmit: (data: any) => void;
}

function FormWrapper({children,  onSubmit}:FormWrapperProps ) {
     const methods = useForm<LoginForm>({ resolver: zodResolver(schema) });
   
  return (
  <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)} >
            {children}
          </form>
  </FormProvider>
  )
}

export default FormWrapper
