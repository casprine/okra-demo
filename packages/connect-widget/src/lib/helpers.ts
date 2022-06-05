export const fetcher = (url: string) => fetch(url).then((r) => r.json());

export const transformBanksResponse = (data: any[]) => {
  return data.map((bank: any) => {
    return {
      name: bank.name,
      id: bank.id,
      image: bank.icon,
    };
  });
};
