//An alarm clock / timer which beeps after a specified amount of time which user specifies command line arguments (can be unlimited number of alarms)
const timer = args => {
  args = process.argv.slice(2);
  args.forEach(input => {
    if (Number(input) > 0) {
      setTimeout(() => {
        process.stdout.write('\007');
      }, Number(input) * 1000);
    }
  });
};
timer();