export async function getRecipeFromAI(ingredients) {
    const VITE_API = import.meta.env.VITE_AI_KEY
    try {

        const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {

            method: "POST",

            headers: {

                "Authorization": `Bearer ${VITE_API}`,

                "Content-Type": "application/json"

            },

            body: JSON.stringify({

                model: "llama-3.3-70b-versatile",

                messages: [

                    {

                        role: "user",

                        content: `Create a recipe using these ingredients: ${ingredients.join(", ")}`

                    }

                ]

            })

        });

        const data = await response.json();

        return data.choices[0].message.content;

    }

    catch (err) {

        console.log(err);

        return "Error generating recipe";

    }

}
