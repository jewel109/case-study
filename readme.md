
# case study id 4

Background: A media player handles different media types like audio and video files. It has a MediaFile base class with common methods (play, pause, stop), while AudioFile and VideoFile subclasses may have additional needs (e.g., subtitles for video). The player should be able to manage any file type seamlessly without extra conditions.

Question: How would you structure the MediaFile, AudioFile, and VideoFile classes so the player works consistently with all file types?

**solution in `index.ts` file**
