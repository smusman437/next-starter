import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { useState } from "react";
import { TODO_URL } from "../constant";

export default function Home(props) {
  const [posts, setPost] = useState(props.data);
  const handleDelete = async (id) => {
    const res = await fetch(`${TODO_URL}/${id}`, { method: "DELETE" });
    if (res.status === 200) {
      const data = posts.filter((post) => post.id !== id);
      setPost(() => data);
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>First Project</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <table className="table table-hover mt-4 shadow-lg p-2 mb-5 bg-white rounded">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Status</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((x) => (
            <tr key={x.id}>
              <th scope="row">{x.id}</th>
              <td>{x.title}</td>
              <td>{x.isComplete ? "Completed" : "Not Completed"}</td>
              <td>
                <button
                  type="button"
                  className="btn btn-outline-primary btn-sm"
                >
                  <Link href={`/details/${x.id}`}>Details</Link>
                </button>
                <button
                  type="button"
                  className="m-1 btn btn-outline-danger btn-sm"
                  onClick={() => handleDelete(x.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <footer className={styles.footer}>
        Powered by <b>@Usman</b>
      </footer>
    </div>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch(TODO_URL, { method: "GET" });
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data }, // will be passed to the page component as props
  };
}
