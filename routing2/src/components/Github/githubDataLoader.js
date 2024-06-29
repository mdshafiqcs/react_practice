const githubDataLoader = async () => {
  const url = "https://api.github.com/users/mdshafiqcs"
  const data = await fetch(url);
  return data.json();
    
} 

export default githubDataLoader;