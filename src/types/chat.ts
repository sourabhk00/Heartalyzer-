export interface Message {
  timestamp: Date;
  sender: string;
  message: string;
  replyTime?: number; // in minutes
}

export interface EmojiData {
  emoji: string;
  count: number;
  sender: string;
}

export interface WordData {
  word: string;
  count: number;
  sender: string;
}

export interface ReplyTimeData {
  messageIndex: number;
  replyTime: number;
  sender: string;
}

export interface HourlyActivity {
  hour: number;
  count: number;
  sender: string;
}

export interface DailyEmojiData {
  date: string;
  [sender: string]: number;
}

export interface ChatData {
  messages: Message[];
  participants: string[];
  totalMessages: number;
  messageCountByUser: { [user: string]: number };
  wordCountByUser: { [user: string]: number };
  mediaCount: number;
  avgReplyTime: number;
  totalEmojis: number;
  loveScore: number;
  replyTimes: ReplyTimeData[];
  emojiFrequency: EmojiData[];
  dailyEmojiData: DailyEmojiData[];
  wordFrequency: WordData[];
  hourlyActivity: HourlyActivity[];
  startDate: Date;
  endDate: Date;
}
