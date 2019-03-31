const { Student } = require('./../models/studentModel');

/**
 * Get Tenth Academic Interval Records
 * @param {*} req 
 * @param {*} res 
 */
let getTenthAcademicIntervalRecords = async (req, res) => {
    try {
        const ZERO_TO_FIFTYFIVE = await Student.countDocuments({ tenthMarks: { $gte: 0, $lte: 55 } });
        const FIFTYSIX_TO_SIXTY = await Student.countDocuments({ tenthMarks: { $gte: 56, $lte: 60 } });
        const SIXTYONE_TO_SIXTYFIVE = await Student.countDocuments({ tenthMarks: { $gte: 61, $lte: 65 } });
        const SIXTYSIX_TO_SEVENTY = await Student.countDocuments({ tenthMarks: { $gte: 66, $lte: 70 } });
        const SEVENTYONE_TO_SEVENTYFIVE = await Student.countDocuments({ tenthMarks: { $gte: 71, $lte: 75 } });
        const SEVENTYSIX_TO_EIGHTY = await Student.countDocuments({ tenthMarks: { $gte: 76, $lte: 80 } });
        const EIGHTYONE_TO_EIGHTYFIVE = await Student.countDocuments({ tenthMarks: { $gte: 81, $lte: 85 } });
        const EIGHTYSIX_TO_NINETY = await Student.countDocuments({ tenthMarks: { $gte: 86, $lte: 90 } });
        const NINETYONE_TO_NINETYFIVE = await Student.countDocuments({ tenthMarks: { $gte: 91, $lte: 96 } });
        const NINETYSIX_TO_HUNDRED = await Student.countDocuments({ tenthMarks: { $gte: 96, $lte: 100 } });
        const tenthIntervalsRecord = [];
        tenthIntervalsRecord.push(
            ZERO_TO_FIFTYFIVE,
            FIFTYSIX_TO_SIXTY,
            SIXTYONE_TO_SIXTYFIVE,
            SIXTYSIX_TO_SEVENTY,
            SEVENTYONE_TO_SEVENTYFIVE,
            SEVENTYSIX_TO_EIGHTY,
            EIGHTYONE_TO_EIGHTYFIVE,
            EIGHTYSIX_TO_NINETY,
            NINETYONE_TO_NINETYFIVE,
            NINETYSIX_TO_HUNDRED
        );
        res.send(tenthIntervalsRecord);
    }
    catch (e) {
        throw new Error(e);
    }
};

/**
 * Get Twelvth Academic Interval Records
 * @param {*} req 
 * @param {*} res 
 */
let getTwelvthAcademicIntervalRecords = async (req, res) => {
    try {
        const ZERO_TO_FIFTYFIVE = await Student.countDocuments({ twelvthMarks: { $gte: 0, $lte: 55 } });
        const FIFTYSIX_TO_SIXTY = await Student.countDocuments({ twelvthMarks: { $gte: 56, $lte: 60 } });
        const SIXTYONE_TO_SIXTYFIVE = await Student.countDocuments({ twelvthMarks: { $gte: 61, $lte: 65 } });
        const SIXTYSIX_TO_SEVENTY = await Student.countDocuments({ twelvthMarks: { $gte: 66, $lte: 70 } });
        const SEVENTYONE_TO_SEVENTYFIVE = await Student.countDocuments({ twelvthMarks: { $gte: 71, $lte: 75 } });
        const SEVENTYSIX_TO_EIGHTY = await Student.countDocuments({ twelvthMarks: { $gte: 76, $lte: 80 } });
        const EIGHTYONE_TO_EIGHTYFIVE = await Student.countDocuments({ twelvthMarks: { $gte: 81, $lte: 85 } });
        const EIGHTYSIX_TO_NINETY = await Student.countDocuments({ twelvthMarks: { $gte: 86, $lte: 90 } });
        const NINETYONE_TO_NINETYFIVE = await Student.countDocuments({ twelvthMarks: { $gte: 91, $lte: 96 } });
        const NINETYSIX_TO_HUNDRED = await Student.countDocuments({ twelvthMarks: { $gte: 96, $lte: 100 } });
        const twelvthIntervalsRecord = [];
        twelvthIntervalsRecord.push(
            ZERO_TO_FIFTYFIVE,
            FIFTYSIX_TO_SIXTY,
            SIXTYONE_TO_SIXTYFIVE,
            SIXTYSIX_TO_SEVENTY,
            SEVENTYONE_TO_SEVENTYFIVE,
            SEVENTYSIX_TO_EIGHTY,
            EIGHTYONE_TO_EIGHTYFIVE,
            EIGHTYSIX_TO_NINETY,
            NINETYONE_TO_NINETYFIVE,
            NINETYSIX_TO_HUNDRED
        );
        res.send(twelvthIntervalsRecord);
    }
    catch (e) {
        throw new Error(e);
    }
};

let getBtechAcademicIntervalRecords = async (req,res) => {
    try {
        const ZERO_TO_FIFTYFIVE = await Student.countDocuments({ btechMarks: { $gte: 0, $lte: 55 } });
        const FIFTYSIX_TO_SIXTY = await Student.countDocuments({ btechMarks: { $gte: 56, $lte: 60 } });
        const SIXTYONE_TO_SIXTYFIVE = await Student.countDocuments({ btechMarks: { $gte: 61, $lte: 65 } });
        const SIXTYSIX_TO_SEVENTY = await Student.countDocuments({ btechMarks: { $gte: 66, $lte: 70 } });
        const SEVENTYONE_TO_SEVENTYFIVE = await Student.countDocuments({ btechMarks: { $gte: 71, $lte: 75 } });
        const SEVENTYSIX_TO_EIGHTY = await Student.countDocuments({ btechMarks: { $gte: 76, $lte: 80 } });
        const EIGHTYONE_TO_EIGHTYFIVE = await Student.countDocuments({ btechMarks: { $gte: 81, $lte: 85 } });
        const EIGHTYSIX_TO_NINETY = await Student.countDocuments({ btechMarks: { $gte: 86, $lte: 90 } });
        const NINETYONE_TO_NINETYFIVE = await Student.countDocuments({ btechMarks: { $gte: 91, $lte: 96 } });
        const NINETYSIX_TO_HUNDRED = await Student.countDocuments({ btechMarks: { $gte: 96, $lte: 100 } });
        const btechIntervalsRecord = [];
        btechIntervalsRecord.push(
            ZERO_TO_FIFTYFIVE,
            FIFTYSIX_TO_SIXTY,
            SIXTYONE_TO_SIXTYFIVE,
            SIXTYSIX_TO_SEVENTY,
            SEVENTYONE_TO_SEVENTYFIVE,
            SEVENTYSIX_TO_EIGHTY,
            EIGHTYONE_TO_EIGHTYFIVE,
            EIGHTYSIX_TO_NINETY,
            NINETYONE_TO_NINETYFIVE,
            NINETYSIX_TO_HUNDRED
        );
        res.send(btechIntervalsRecord);
    }
    catch (e) {
        throw new Error(e);
    }
};

/**
 * Render Chart
 * @param {*} req 
 * @param {*} res 
 */
let renderChart = (req, res) => {
    res.render('studentsAnalysis', { pageTitle: 'Student Analysis Report' });
};

module.exports = {
    getTenthAcademicIntervalRecords,
    getTwelvthAcademicIntervalRecords,
    getBtechAcademicIntervalRecords,
    renderChart
}