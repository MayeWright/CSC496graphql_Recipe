import * as React from "react"
import { Link, graphql } from "gatsby"


const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}

const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}

const recipe = ({ data }) => {
  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}></h1>
      {data.Drupal.nodeRecipe.title}
      <p style={paragraphStyles}>
        <div>
        Recipe Category
        {data.Drupal.nodeRecipe.recipeCategory.name}
        </div>
        <div>
        Tags
        {data.Drupal.nodeRecipe.tags.name}
        </div>
        <div>
        Summary
        {data.Drupal.nodeRecipe.summary.processed}
        </div>
        <div>
        Preparation time
        {data.Drupal.nodeRecipe.preparationTime}
        </div>
        <div>
        Cooking time
        {data.Drupal.nodeRecipe.cookingTime}
        </div>
        <div>
        Number of servings
        {data.Drupal.nodeRecipe.numberOfServings}
        </div>
        <div>
        Difficulty
        {data.Drupal.nodeRecipe.difficulty}
        </div>
        <div>
        Ingredients
        {data.Drupal.nodeRecipe.ingredients}
        </div>
        <div>
        Recipe instruction
        {data.Drupal.nodeRecipe.recipeInstruction.processed}
        </div>
        <Link to="/">Go home</Link>.
      </p>
    </main>
  )
}
export const query = graphql`
query {
    Drupal {
      nodeRecipe(id: "bba672a8-cbcb-44ce-aa33-c5b8703345fa") {
        title
        recipeCategory {
          name
        }
        tags {
          name
        }
        summary {
          processed
        }
        preparationTime
        cookingTime
        numberOfServings
        difficulty
        ingredients
        recipeInstruction {
          processed
        }
      }
    }
  }
  `

export default recipe

export const Head = () => <title>recipe</title>
