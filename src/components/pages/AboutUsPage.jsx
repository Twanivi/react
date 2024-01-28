import { useContext } from "react";
import { UserCompanyContext } from "../../context/UserCompanyContext";

export const AboutUsPage = () => {
  const { userCom } = useContext(UserCompanyContext);

  return (
    <div className="about-us-page">
      <h2>What we do</h2>
      <p>
        Our team of digital marketing specialists constantly delivers
        exceptional results for our clients. As SEO experts with over a decade
        of experience, we bring together ideas that will deliver considerable
        effect on the bottom line of our customers. We will assist you develop a
        meaningful relationship with your own clients through the use of online
        marketing particularly via search engine optimization. We have developed
        search strategies for leading brands to small and medium sized
        businesses across many industries in the Philippines and worldwide.
      </p>
      <h2>Our Team</h2>
      <p>
        Our success is a result of teamwork and building upon our technical
        expertise and creative style providing a full-service solution to our
        clients.
      </p>
      <div className="wrapper-about-us">
        {userCom.map((user) => (
          <div key={user.id}>
              <p>Name: {user.name}</p>
              <p>Phone: {user.phone}</p>
              <p>Company: {user.company.name}</p>
              <p>Website: {user.website}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
