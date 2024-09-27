// Link: https://takeuforward.org/data-structure/n-meetings-in-one-room/

const maxMeetingsInRoom = (N, start, end) => {
  let noOfMeeting = [];
  let curr = 0;
  let lastMeetingEndTime = 0;
  while (curr < N) {
    if (start[curr] < end[curr] && start[curr] >= lastMeetingEndTime) {
      noOfMeeting.push(curr + 1);
      lastMeetingEndTime = end[curr];
    }
    curr++;
  }
  return noOfMeeting;
};

console.log(maxMeetingsInRoom(6, [1, 3, 0, 5, 8, 5], [2, 4, 5, 7, 9, 9]));