const ErrorResponse = require('../utils/errorResponse');
const Service = require('../models/Service');

// @desc    get all Services
// @route   GET /api/v1/services
// @access  Public
exports.getServices = async (req, res, next) => {
  try {
    const services = await Service.find();

    res
      .status(200)
      .json({ success: 'true', count: services.length, data: services });
  } catch (err) {
    next(err);
  }
};

// @desc    get single Services
// @route   GET /api/v1/services/:id
// @access  Public
exports.getService = async (req, res, next) => {
  try {
    const service = await Service.findById(req.params.id);

    if (!service) {
      return next(
        new ErrorResponse(`Service not found with id of ${req.params.id}`, 404)
      );
    }

    res.status(200).json({ success: 'true', data: service });
  } catch (err) {
    next(err);
  }
};

// @desc    Create new Service
// @route   POST /api/v1/services
// @access  Private
exports.createService = async (req, res, next) => {
  try {
    const service = await Service.create(req.body);

    res.status(201).json({
      success: true,
      data: service,
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Update Service
// @route   PUT /api/v1/services/:id
// @access  Private
exports.updateService = async (req, res, next) => {
  try {
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
  } catch (err) {
    next(err);
  }
};

// @desc    Delete Service
// @route   DELETE /api/v1/services/:id
// @access  Private
exports.deleteService = async (req, res, next) => {
  try {
    const service = await Service.findByIdAndDelete(req.params.id);

    if (!service) {
      return next(
        new ErrorResponse(`Service not found with id of ${req.params.id}`, 404)
      );
    }

    res.status(200).json({ success: true, data: {} });
  } catch (err) {
    next(err);
  }
};
