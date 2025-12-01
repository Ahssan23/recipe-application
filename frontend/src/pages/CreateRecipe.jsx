import axios from "axios";
import RecipeForm from "../components/RecipeForm";
import { useNavigate, Link } from "react-router-dom"; // ✅ useNavigate for redirects

export default function CreateRecipe() {
  const navigate = useNavigate();

  const handleSubmit = async (formData) => {
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/recipe/api/addRecipe`,
        formData,
        { withCredentials: true }
      );

      alert("Recipe Created!");
      console.log(res.data);
      navigate("/recipes"); // ✅ redirect after creation
    } catch (err) {
      console.log(err);
      alert("Failed to submit");
    }
  };

  return (
    <div className="page-container" style={{ maxWidth: "600px", margin: "0 auto", padding: "24px" }}>
      <RecipeForm onSubmit={handleSubmit} />

      <div style={{ marginTop: "24px", display: "flex", gap: "12px", flexWrap: "wrap", justifyContent: "center" }}>
        <Link to="/" style={{ padding: "12px 20px", background: "#3498db", color: "white", borderRadius: "8px", textDecoration: "none", textAlign: "center", flex: "1 1 120px" }}>
          Home
        </Link>
        <Link to="/recipes" style={{ padding: "12px 20px", background: "#2ecc71", color: "white", borderRadius: "8px", textDecoration: "none", textAlign: "center", flex: "1 1 120px" }}>
          Recipes
        </Link>
      </div>
    </div>
  );
}
