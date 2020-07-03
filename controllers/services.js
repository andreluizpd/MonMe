const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const Service = require('../models/Service');

// @desc    get all Services
// @route   GET /api/v1/services
// @access  Public
exports.getServices = asyncHandler(async (req, res, next) => {
  const services = await Service.find();

  res
    .status(200)
    .json({ success: 'true', count: services.length, data: services });
});

// @desc    get single Services
// @route   GET /api/v1/services/:id
// @access  Public
exports.getService = asyncHandler(async (req, res, next) => {
  const service = await Service.findById(req.params.id);

  if (!service) {
    return next(
      new ErrorResponse(`Service not found with id of ${req.params.id}`, 404)
    );
  }

  res.status(200).json({ success: 'true', data: service });
});

// @desc    Create new Service
// @route   POST /api/v1/services
// @access  Private
exports.createService = asyncHandler(async (req, res, next) => {
  const service = await Service.create(req.body);

  res.status(201).json({
    success: true,
    data: service,
  });
});

// @desc    Update Service
// @route   PUT /api/v1/services/:id
// @access  Private
exports.updateService = asyncHandler(async (req, res, next) => {
  const service = await Service.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!service) {
    return next(
      new ErrorResponse(`Service not found with id of ${req.params.id}`, 404)
    );
  }

  res.status(200).json({ success: true, data: service });
});

// @desc    Delete Service
// @route   DELETE /api/v1/services/:id
// @access  Private
exports.deleteService = asyncHandler(async (req, res, next) => {
  const service = await Service.findByIdAndDelete(req.params.id);

  if (!service) {
    return next(
      new ErrorResponse(`Service not found with id of ${req.params.id}`, 404)
    );
  }

  res.status(200).json({ success: true, data: {} });
});
