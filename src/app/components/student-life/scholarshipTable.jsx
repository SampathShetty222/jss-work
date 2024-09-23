import React, { Fragment } from "react";
import ScholorshipContactCard from "./scholorshipContactCard";
import { contactMembers, scholorshipTableData } from "./data";

const ScholarshipTable = () => {
  const headerStyle = {
    borderTop: "1px solid #E4E7EC",
    borderBottom: "1px solid #E4E7EC",
    padding: "13px",
    backgroundColor: "#F9FAFB",
    textAlign: "left",
    fontFamily: '"DM Sans", sans-serif',
    color: "#475467",
    fontSize: "12px",
  };
  const footerStyle = {
    borderTop: "1px solid #E4E7EC",
    borderBottom: "1px solid #E4E7EC",
    padding: "13px",
    backgroundColor: "#F9FAFB",
    textAlign: "left",
    fontFamily: '"DM Sans", sans-serif',
    color: "#272A2F",
    fontSize: "12px",
    fontWeight: "700",
  };
  const cellStyle = {
    fontSize: "14px",
    fontFamily: '"DM Sans", sans-serif',
    color: "#475467",
    borderBottom: "1px solid #E4E7EC",
    padding: "16px 13px",
    verticalAlign: "middle",
  };
  return (
    <>
      <section className="mx-4 py-8 overflow-x-auto">
        <div className="w-[924px] py-[32px] border-t border-x rounded-tl-lg rounded-tr-lg pl-6">
          <h4 className="text-lg font-normal text-[#101828]">
            Statement of Scholarships
          </h4>
        </div>
        <table className="border w-[924px] ">
          <thead>
            <tr>
              <th style={headerStyle}>Sl.No.</th>
              <th style={headerStyle}>Name of the Scholarship </th>
              <th style={headerStyle}>
                Academic year 2019-20
                <br /> Amount Disbursed in (₹){" "}
              </th>
              <th style={headerStyle}>
                {" "}
                Academic year 2018-19
                <br /> Amount Disbursed in (₹){" "}
              </th>
            </tr>
          </thead>
          <tbody>
            {scholorshipTableData.map((value, i) => (
              <tr key={i}>
                <td style={cellStyle}>{value.id}</td>
                <td style={cellStyle}>{value.nameOfScholorship}</td>
                <td style={cellStyle}>{value.year2019To20}</td>
                <td style={cellStyle}>{value.year2018To18}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th style={footerStyle}></th>
              <th style={footerStyle}>Total</th>
              <th style={footerStyle}>61293494</th>
              <th style={footerStyle}>49612393</th>
            </tr>
          </tfoot>
        </table>
      </section>

      <section className="md:mx-4 mt-10 md:mt-0">
        <div className="max-w-[924px] py-[32px] border-t border-x rounded-tl-lg rounded-tr-lg pl-6">
          <h4 className="text-lg font-normal text-[#101828]">
            For Scholarship related queries, Contact
          </h4>
        </div>
        <div className="border grid md:grid-cols-2 rounded-bl-lg rounded-br-lg">
          {contactMembers.map(({ image, name, i }) => (
            <Fragment key={i}>
              <ScholorshipContactCard keyValue={i} image={image} name={name} />
            </Fragment>
          ))}
        </div>
      </section>
    </>
  );
};

export default ScholarshipTable;
