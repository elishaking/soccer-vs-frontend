export default interface Player {
  name: string;
  club: {
    name: string;
    imageUrl: string;
  };
  imageUrl: string;
  height: number;
  weight: number;
  age: number;
  mainDetails: {
    skillMoves: number;
    crossing: number;
    curve: number;
    dribbling: number;
    freeKickAccuracy: number;
    composure: number;
  };
}
