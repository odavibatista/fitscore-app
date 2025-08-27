'use client'
import style from "./styles.module.css"
import { JSX, ReactNode } from 'react'

export interface SpinnerProps {
    title?: string
    alertDialog?: ReactNode
}

export function Spinner({ title, alertDialog }: SpinnerProps): JSX.Element {
  return (
    <div className={style.spinner_container}>
      <div>
        <h1>{title}</h1>
        <div className={style.spinner}/>
      </div>
      {alertDialog}
    </div>
  )
}
