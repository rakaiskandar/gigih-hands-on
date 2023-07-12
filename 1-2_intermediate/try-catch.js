const student = [{ name: "Alice "}];

try {
    console.log(student[1].name);
} catch (error) {
    console.log("Error message:", error.message);
}