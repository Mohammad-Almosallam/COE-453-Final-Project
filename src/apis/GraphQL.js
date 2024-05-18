export const getBMIbyGraphQL = async () => {
  try {
    const response = await fetch(
      "https://graphapiv3-ji6zmiyasq-uc.a.run.app/graphql",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query: "{ getBMI }" }),
      }
    );
    if (!response.ok) {
      throw new Error("Failed to fetch BMI data");
    }
    const jsonData = await response.json();
    const data = JSON.parse(jsonData.data.getBMI);
    return data;
  } catch (error) {
    console.error("Error fetching BMI data:", error);
    throw error;
  }
};

export const calculateBMIusingGraphQL = async (query) => {
  try {
    const response = await fetch(
      "https://graphapiv3-ji6zmiyasq-uc.a.run.app/graphql",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
      }
    );
    if (!response.ok) {
      throw new Error("Failed to fetch BMI data");
    }
    const jsonData = await response.json();
    console.log("GraphQL Response:", jsonData);
    return jsonData;
  } catch (error) {
    console.error("Error fetching BMI data:", error);
    throw error;
  }
};
