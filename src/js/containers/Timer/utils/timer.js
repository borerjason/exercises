// logic for exercises

// state

phase = 'exercise' || 'buffer';

if (time === 0) {
  if (phase === 'exercise') {
    set--;
    time = buffer.time
    phase = 'buffer';
  } else {
    time = set.time
    phase = 'exercise';
  }
}
