import { useQuery } from "react-query";
import { testApi } from "../../services/user.api";

function Home() {
  const { data, status } = useQuery("testApi", testApi);
  return (
    <section className="p-4 md:p-10">
      {status === "loading" && <h1>Loading...</h1>}
      {status === "success" && (
        <ul>
          {data.map((post, index) => (
            <li key={index}>{post.title}</li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default Home;
