import React from "react";
import Layout from "../../components/layout/Layout";

const notes = () => {
  const handleChange = () => {};
  return (
    <Layout>
      <section>
        <textarea
          onChange={handleChange}
          cols="10"
          rows="50"
          placeholder="What do you do Nigga?"
        >
          Write something here
        </textarea>
      </section>
    </Layout>
  );
};

export default notes;
