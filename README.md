# sah-fe

### User Stories

**As a new user, I want clear instructions, so that I can follow the setup process easily and get started playing.

Feature Tasks: 
* Info button on the splash page that explains the app objectives
* Clear & descriptive input labels/placeholders

Acceptance Tests:
* Ensure that inputs and clearly labeled and only accepts the correct type of information
* Provide an error message if the room code is incorrect and redirects to the Create/Join Room page

**As a judge, I want to know what my task is, picking a song that resonates with the me closely to the topic, and have clear indications of how to pick a winner, so that I can judge accurately and know that my actions are being received  

Feature Tasks: 
* Prompt that indicates who the judge is
* Topic for the song or ability create their own topic for the song
* Ability to pick a participants song as a winner
* Judge chosen winning user awarded a point for the win

Acceptance Tests:
* Ensure that the group is notified which song/user was chosen as the winner
* Continues onto the next round
* Chosen winner has one more point

**As a participant, I want responsive feedback from the app, so that I know I’m engaging with it correctly even if I’m not hosting, and/or don’t have Spotify Premium

Feature Tasks: 
* State-gates (prompts, timeouts, etc.) to keep events from occurring until users are ready for them
* Clear, frequent visual feedback to alert users of events
* User joins room/list of users in room
* Waiting on OAuth/waiting on host to start game
* Judging/not judging
* Disconnection/errors
etc.

Acceptance Tests:
* Identify key, user-facing lifecycle events, and ensure that each one corresponds to a view that delivers this information to the user

**As a consumer of this product, I want to be able to entertain my friends with funny musical responses to prompts.

Feature Tasks:
* User can see the prompt they have to respond to.
* Have a search window that accesses the Spotify API to find a song.
* A user can submit a song as their answer to the prompt.
* A user’s submitted song will play for the whole room.

Acceptance Tests:
* Ensure that a user can see the prompt they are responding to.
* Ensure that a user can search for a song that is available on Spotify.
* Ensure that a user’s submission will be saved.
* Ensure that a user’s submission will be played.
* Ensure a user’s score will increase if their option is picked.
