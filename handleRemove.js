
    Excluir um repositório através de um id fornecido;

const removeRepository = (prevState: Repository[], repoID: number) =>
  prevState.filter((repo) => repo.id !== repoID);

Agora precisamos utilizar ela no nosso hook pra manipular o estado de repositórios atual e expor esse método para que qualquer dev possa usa-lo quando necessário:

  ...

  const handleRemove = (repoID: number) => {
    setRepositories(removeRepository(repositories, repoID));
  };

  ...

  return {
    loading,
    repositories,
    handleRemove,
  };
