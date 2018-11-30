/**
 * FinanceController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  init: async function (req, res) {
    var emp;
    if (typeof req.session.username !== 'undefined') {
      emp = await Employee.findOne({
        username: req.session.username
      });
    }
    return res.view('pages/finance', {
      layout: 'layouts/general-layout',
      emp: typeof emp === 'undefined' ? null : emp,
    });
  },

};
