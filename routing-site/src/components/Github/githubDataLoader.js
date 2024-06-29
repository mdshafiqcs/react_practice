export const githubDataLoader = async () => {
  const response = await fetch("https://api.github.com/users/mdshafiqcs");
  return response.json();
}