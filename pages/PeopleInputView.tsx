import React, { MouseEventHandler, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import styles from "../styles/Home.module.css";

type Inputs = {
  example: string;
  exampleRequired: string;
};

export default function App() {
  const { register, handleSubmit, watch, errors } = useForm<Inputs>();
  const onSubmit = (data) => console.log(data);
  const [group, setGroup] = useState(false);

  let response = null;

  const FieldWatcher = watch("input1");

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}

        {/* include validation with required or other standard HTML validation rules */}
        <input className="i" name="input1" ref={register({ required: true })} />
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}

        <input
          onClick={() => {
            setGroup(true);
          }}
          type="submit"
        />
      </form>

      <div className={styles.grid}>
        <a href="https://nextjs.org/docs" className={styles.card}>
          <>
            {group ? (
              <>
                <h3>Group 1</h3>
                <p>{FieldWatcher}</p>
              </>
            ) : (
              <p>
                There are no people to be scrambled into groups yet! Add them
                now to get started.
              </p>
            )}
          </>
        </a>
      </div>
    </>
  );
}
