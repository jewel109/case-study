

// Base class with common methods
abstract class MediaFile {
  abstract play(): void;
  abstract pause(): void;
  abstract stop(): void;
}

// AudioFile subclass implementing common methods
class AudioFile extends MediaFile {
  play(): void {
    console.log("Playing audio file");
  }
  pause(): void {
    console.log("Pausing audio file");
  }
  stop(): void {
    console.log("Stopping audio file");
  }
}

// VideoFile subclass implementing common methods
class VideoFile extends MediaFile implements SubtitleSupport {
  play(): void {
    console.log("Playing video file");
    this.showSubtitles(); // Example of video-specific behavior
  }
  pause(): void {
    console.log("Pausing video file");
  }
  stop(): void {
    console.log("Stopping video file");
  }

  showSubtitles(): void {
    console.log("Displaying subtitles");
  }
}
interface SubtitleSupport {
  showSubtitles(): void;
}
// Media player class that handles any MediaFile without knowing its type
class MediaPlayer {
  playMedia(file: MediaFile): void {
    file.play();
  }

  pauseMedia(file: MediaFile): void {
    file.pause();
  }

  stopMedia(file: MediaFile): void {
    file.stop();
  }
  showSubtitles(file: MediaFile): void {
    if ("showSubtitles" in file) {
      (file as SubtitleSupport).showSubtitles();
    } else {
      console.log("This media type does not support subtitles.");
    }
  }
}

// Example usage
const audio = new AudioFile();
const video = new VideoFile();
const player = new MediaPlayer();

player.playMedia(audio);  // Output: Playing audio file
player.playMedia(video);  // Output: Playing video file, Displaying subtitles
player.showSubtitles(audio)
player.showSubtitles(video)
