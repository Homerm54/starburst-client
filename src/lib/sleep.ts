/**
 * Utility function to mock async executions, either fecthes, or other tasks that
 * will take some time to finish
 * @param sleep_time Time that the execution will be stopped, in ms.
 * @returns Nothing, just await this function to finish.
 */
function sleep(sleep_time = 1000): Promise<void> {
  return new Promise((res) => {
    setTimeout(res, sleep_time);
  });
}

export { sleep };
