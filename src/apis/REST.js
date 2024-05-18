export const getBMIbyRest = async () => {
  try {
    const response = await fetch(
      "https://restapiv3-ji6zmiyasq-uc.a.run.app/getBMI"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch BMI data");
    }
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    console.error("Error fetching BMI data:", error);
    throw error;
  }
};

export const calculateBMIusingREST = async (payload) => {
  try {
    const response = await fetch(
      "https://restapi2-ji6zmiyasq-uc.a.run.app/calculateBMI",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );
    if (!response.ok) {
      throw new Error("Failed to fetch BMI data");
    }
    const jsonData = await response.json();
    console.log("REST Response:", jsonData);
    return jsonData;
  } catch (error) {
    console.error("Error fetching BMI data:", error);
    throw error;
  }
};
