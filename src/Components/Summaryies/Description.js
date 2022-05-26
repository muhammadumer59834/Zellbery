import React from 'react'
import Chart from 'react-apexcharts'

function Description() {
    return (
        <>
            <h4 className='mt-4'>Location Summary</h4>


            <div className='myTbl'>
                <hr className="mx-1" />

                <div className="row">
                    <div className="col-md-12 col-sm-12" >
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
                            <tbody className='fix'>
                                <tr>
                                    <td>QTA-GOLD CITY MALL FIRST FLOOR </td>
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
                                    <td>12345689</td>
                                    <td>{(12345689).toLocaleString(undefined, { maximumFractionDigits: 2 })}</td>
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

                </div>
            </div>
            {/* Chart */}
            <div className='top ' >
                <div className="container-fluid mb-3 mt-5 alig" >
                    <Chart className='righ'
                        type="pie"
                        width={300}
                        height={320}

                        series={[100, 200, 300, 500, 88, 334, 532, 456, 734, 223, 565, 777, 255, 244]}


                        options={{
                            
                            colors: ['#C3C3C3', '#E5E5E5', '#71CC81', '#19B28E', '#F2F18B', ' #71CC81', ' #19B28E', '#216583', '#424D7B', '#FFD72F'],
                            noData: { text: "No Data" },
                            labels: ['KHI - LUCKY ONE MALL 2ND FLOOR', 'ISB-CENTAURUS MALL', 'KHI-DOLMEN MALL CLIFTON', 'KHI-KDA MARKET', 'KHI-ATRM', 'KHI-UNIVERSITY ROAD', 'KHI-SHAHEED E MILLAT', 'PSW-UNIVERSITY ROAD', 'LHR-PACKAGES MALL', 'LHR-EMPORIUM MALL', 'MRPK-HYDERABAD ROAD', 'KWL-SIR SYED ROAD', 'SLKT-MALL OF SIALKOT FIRST FLOOR', 'DSK-COLLEGE ROAD'],
                            legend: {
                                show: false
                            }
                        }}
                    >
                    </Chart>
                </div>
            </div>
        </>
    )
}

export default Description