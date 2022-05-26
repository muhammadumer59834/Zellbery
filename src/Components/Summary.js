import React from "react"
import Chart from 'react-apexcharts'

function Summary() {

    return (
        <>


            <div className="contain containMobile">
                <div className='myTbl'>


                    <h3 className="page-title mar">Summary</h3>
                    <hr className="mx-1" />

                    <div className="row">
                        <div className="col-md-8 col-sm-12" >
                            <table className='tbl-category table table-hover display nowrap' width="100%">
                                <thead >
                                    <tr className="bg-inverse" style={{ fontWeight: 800 }}>
                                        <th className="bb-2 bg-inverse text-center ">Description</th>
                                        <th className="bb-2 bg-inverse text-center mg">Gross Sale	</th>
                                        <th className="bb-2 bg-inverse text-center mg">Net Sale</th>
                                        <th className="bb-2 bg-inverse text-center mg">Qty</th>
                                        <th className="bb-2 bg-inverse text-center mg">Discount</th>
                                        <th className="bb-2 bg-inverse text-center mg">Sales Return</th>
                                        <th className="bb-2 bg-inverse text-center mg">Total Bills</th>
                                        <th className="bb-2 bg-inverse text-center mg">Average Bill	</th>
                                        <th className="bb-2 bg-inverse text-center mg">GP Margin</th>
                                    </tr>
                                </thead>
                                <tbody className=''>
                                    <tr>
                                        <td>{(12345689).toLocaleString(undefined, { maximumFractionDigits: 2 })}</td>
                                        <td>12345689</td>
                                        <td>12345689</td>
                                        <td>12345689</td>
                                        <td>12345689</td>
                                        <td>12345689</td>
                                        <td>12345689</td>
                                        <td>12345689</td>
                                        <td>12345689</td>
                                    </tr>
                                    <tr>
                                        <td>12345689</td>
                                        <td>12345689</td>
                                        <td>{(12345689).toLocaleString(undefined, { maximumFractionDigits: 2 })}</td>
                                        <td>12345689</td>
                                        <td>12345689</td>
                                        <td>12345689</td>
                                        <td>12345689</td>
                                        <td>12345689</td>
                                        <td>12345689</td>
                                    </tr>
                                    <tr>
                                        <td>12345689</td>
                                        <td>12345689</td>
                                        <td>12345689</td>
                                        <td>12345689</td>
                                        <td>12345689</td>
                                        <td>12345689</td>
                                        <td>12345689</td>
                                        <td>12345689</td>
                                        <td>12345689</td>
                                    </tr>
                                    <tr>
                                        <td>12345689</td>
                                        <td>12345689</td>
                                        <td>12345689</td>
                                        <td>12345689</td>
                                        <td>12345689</td>
                                        <td>12345689</td>
                                        <td>12345689</td>
                                        <td>12345689</td>
                                        <td>12345689</td>
                                    </tr>




                                </tbody>
                            </table>

                        </div>

                        {/* chart */}

                        <div className='col-md-4 col-sm-12'>
                            <div className="container-fluid mb-5">
                                <Chart
                                    type="bar"
                                    width={360}
                                    height={380}
                                    series={[
                                        {
                                            data: [6578, 6787],
                                        },
                                    ]}
                                    options={{
                                        title: {
                                            style: { fontSize: 15 },
                                        },


                                        theme: { mode: "light" },

                                        xaxis: {

                                            categories: [
                                                "Facebook",
                                                "Twitter"
                                            ],
                                            colors: ["#77AFF9", "#17B3A3"],
                                        },

                                        yaxis: {
                                            labels: {

                                                formatter: (val) => {
                                                    return `${val}`;
                                                },

                                                style: { fontSize: "15", colors: ["black"] },
                                            },

                                        },

                                        legend: {
                                            show: true,
                                            position: "right",
                                        },

                                        dataLabels: {
                                            formatter: (val) => {
                                                return `${val}`;
                                            },
                                            style: {
                                                colors: ["#f4f4f4"],
                                                fontSize: 15,
                                            },
                                        },
                                    }}
                                ></Chart>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


        </>
    )
}

export default Summary