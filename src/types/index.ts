export interface Timer {
  hours: number;
  minutes: number;
  seconds: number;
}

export interface Work {
  startTime: string;
  finishedTime: string;
  totalTime: Timer;
  stopOverCount: number;
  createdDate: number;
}

export interface ISettings {
  showQuote: boolean;
  showCountDown: boolean;
  showDatetime: boolean;
  showFullscreen: boolean;
}
