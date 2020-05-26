// @desc    get all Services
// @route   GET /api/v1/services
// @access  Public
exports.getServices = (req, res, next) => {
  res.status(200).json({ success: 'true', msg: 'Show All Services Available' });
};

// @desc    get single Services
// @route   GET /api/v1/services/:id
// @access  Public
exports.getService = (req, res, next) => {
  res
    .status(200)
    .json({ success: 'true', msg: `Display service ${req.params.id}` });
};

// @desc    Create new Service
// @route   POST /api/v1/services
// @access  Private
exports.createService = (req, res, next) => {
  res.status(200).json({ success: 'true', msg: 'Create new Service' });
};

// @desc    Update Service
// @route   PUT /api/v1/services/:id
// @access  Private
exports.updateService = (req, res, next) => {
  res
    .status(200)
    .json({ success: 'true', msg: `update service ${req.params.id}` });
};

// @desc    Delete Service
// @route   DELETE /api/v1/services/:id
// @access  Private
exports.deleteService = (req, res, next) => {
  res
    .status(200)
    .json({ success: 'true', msg: `Remove service ${req.params.id}` });
};
