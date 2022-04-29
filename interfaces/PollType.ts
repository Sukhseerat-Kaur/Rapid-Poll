export interface OptionType {
  id: number;
  name: string;
  votes: number;
}

export interface PollType {
  key: string;
  question: string;
  options: Array<OptionType>;
  totalVotes: number;
  // expireAfter: null | number;
}
