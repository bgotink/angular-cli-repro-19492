exports.default = function (options) {
  return (_, context) => context.logger.info('Hello', JSON.stringify(options));
}
