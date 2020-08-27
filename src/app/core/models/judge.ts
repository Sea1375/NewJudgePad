export interface Judge {
  id: number;
  judgeNumber: string;
  userId: number;
  score: number;
  msgFromRecorder: string;
  msgToRecorder: string;
  backend: boolean;
}
