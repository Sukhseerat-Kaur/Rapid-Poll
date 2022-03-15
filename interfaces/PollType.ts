export interface OptionType {
  id: number;
  name: string;
  votes: number;
}

export interface PollType {
  id?: number;
  question: string;
  options: Array<OptionType>;
  totalVotes: number;
  expireAfter: null | string;
}
