const createLoginTracker = () => {
  return {}
}


module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};