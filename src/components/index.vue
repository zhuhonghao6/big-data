<template>
  <div>
    <dv-full-screen-container>
      <div class="box">
        <div class="top">
          <div>
            <div class="titles">
              <p>2021年杭州维护业务动态监控</p>
            </div>
          </div>
        </div>
        <!-- 第一层 -->
        <div class="oneLayer">
          <div class="arc">
            <div class="psa">
              <div class="content">
                <div class="boxs"></div>
              </div>
            </div>

            <div class="ps">
              <div class="content">
                <div class="boxs"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- 第二层 -->
        <div class="twoLayer">
          <div class="leftFrom">
            <dv-border-box-4 :color="['#2f4783', '#c0c0c0']">
              <div class="leftFromBox">
                <p></p>
                <div class="top_box">
                  <!-- 部门数量 员工人数 -->
                  <div class="yg_left">
                    <p class="yg_title">网格数量: 85</p>
                    <p class="yg_title">员工总数: 1510</p>
                    <p class="yg_title">智慧家庭工程师: 660</p>
                  </div>
                  <!-- 工程师占比 -->
                  <div class="yg_right">
                    <dv-decoration-9
                      style="width: 120px; height: 120px; color: #fff"
                      >77.8%</dv-decoration-9
                    >
                  </div>
                </div>
                <p class="sr">收入</p>
                <div class="bottom_box">
                  <div class="bottom_left">
                    <dv-active-ring-chart
                      :config="config"
                      style="
                        width: 290px;
                        height: 290px;
                        position: relative;
                        left: -60px;
                        top: -70px;
                      "
                    />
                  </div>
                  <!-- <div class="bottom_right">
                    <p class="ys_title">月收入: 5672元</p>
                    <p class="ys_title">累计: 948532元</p>
                  </div> -->
                </div>
              </div>
            </dv-border-box-4>
          </div>

          <div class="rightFrom">
            <dv-border-box-4 :color="['#2f4783', '#c0c0c0']" class="rightFromS">
              <div class="rightFromBox">
                <div class="rightFromTop">
                  <div class="topFont">
                    <p class="topFontTop" style="margin-left: 20px">171364</p>
                    <p class="topFontTop" style="margin-left: 80px;margin-botton:40px">公众号关注量</p>
                    <!-- <div style="margin-top: 20px">
                      <p class="topFontTow">今日关注：XXXX人</p>
                      <p class="topFontTow">累计关注：XXXX人</p>
                    </div>
                    <div style="margin-top: 20px">
                      <p class="topFontTow">今日绑定：XXXX人</p>
                      <p class="topFontTow">累计绑定：XXXX人</p>
                    </div> -->
                    <!-- <div style="margin-top: 20px">
                      <dv-decoration-2 style="width: 320px; height: 5px" />
                    </div> -->
                    <br /> <br /> 
                    <div style="width: 100%; hieght: 500px"><lunb></lunb></div>
                  </div>
                </div>
                <!-- <div class="rightFromBotton">
                  <p class="topFontTop">KPI</p>
                 
                </div> -->
              </div>
            </dv-border-box-4>
          </div>

          <div class="toptop"><p>家宽维护量</p></div>
        </div>

        <!-- 第三层 -->
        <div class="threeLayer">
          <div class="centerFrom">
            <div class="num">
              <num :num="num"></num>
            </div>

            <div class="Statistics">
              <dv-border-box-1 backgroundColor="#1f2a45">
                <!-- <div class="round">
                  <div class="roundOne">
                    <div class="roundOnes">
                      <p class="roundOnesBai">87.73%</p>
                    </div>
                    <p class="roundOnesFont">年度收入</p>
                  </div>
                  <div class="roundTwo">
                    <div class="roundTwos">
                      <p class="roundTwosBai">87.73%</p>
                    </div>
                    <p class="roundTwosFont">宽带电视维护量</p>
                  </div>
                  <div class="roundThree">
                    <div class="roundThrees">
                      <p class="roundThreesBai">87.73%</p>
                    </div>
                    <p class="roundThreesFont">集客维护量</p>
                  </div>
                </div> -->
                <div class="map"><map2></map2></div>
              </dv-border-box-1>
            </div>
          </div>

          <div class="bottonFrom">
            <div class="bottonFromBox">
              <div class="bottonFromOne">
                <div class="bottonFromOneFam">
                  <dv-border-box-9>
                    <div style="position: absolute">
                      <p class="topFontTow">机顶盒维护量</p>
                      <p class="topFontTow">1341257</p>
                    </div>
                  </dv-border-box-9>
                </div>
              </div>
              <div class="bottonFromTow">
                <div class="bottonFromTowFam">
                  <dv-border-box-9>
                    <!-- <div class="dashboardOne">
                      <csv></csv>
                      <p class="dashboardOneFont">家宽装维服务满意度</p>
                    </div> -->
                    <div style="position: absolute">
                      <p class="topFontTow">日机顶盒竣工量</p>
                      <p class="topFontTow">1031</p>
                    </div>
                  </dv-border-box-9>
                </div>
              </div>
              <div class="bottonFromThree">
                <div class="bottonFromThreeFam">
                  <dv-border-box-9>
                    <!-- <div class="dashboardTwo">
                      <csv></csv>
                      <p class="dashboardTwoFont">装机质检通过率</p>
                    </div> -->
                    <div style="position: absolute">
                      <p class="topFontTow">日宽带竣工量</p>
                      <p class="topFontTow">1463</p>
                    </div>
                  </dv-border-box-9>
                </div>
              </div>
              <div class="bottonFromFour">
                <div class="bottonFromFormFam">
                  <dv-border-box-9>
                    <div style="position: absolute">
                      <p class="topFontTow">集客维护量</p>
                      <p class="topFontTow">81832</p>
                    </div>
                  </dv-border-box-9>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </dv-full-screen-container>
  </div>
</template>

<script>
import map2 from "../components/map2";
import lunb from "../components/lunb";
// import csv from "../components/csv";
import "../assets/c";
import num from "../components/numberScrolling";
export default {
  name: "index",

  data() {
    return {
      num: 2314486,
      config: {
        radius: "40%",
        activeRadius: "45%",
        data: [
          {
            name: "1月收入",
            value: 16199026,
          },
          {
            name: "累计收入",
            value: 16199026,
          },
        ],
        digitalFlopStyle: {
          fontSize: 16,
        },
        showOriginValue: true,
        lineWidth: 13,
      },
    };
  },

  components: { map2, num, lunb },
  created() {
    const timer = setInterval(() => {
      this.num += parseInt(Math.random() * 3);
    }, Math.random() * 25000);
    setTimeout(() => {
      clearInterval(timer);
      // window.location.href = "http://www.whbqd.xyz/bigdata3"
    }, 30000)
  },
};
</script>


<style scoped lang="less">
@import "../assets/c.css";
@import "../assets/reset.css";

.leftFromBox {
  width: 100%;
  height: 100%;
  // border: 1px solid #000;
  padding: 30px 10px 10px 30px;
  box-sizing: border-box;
  font-size: 18px;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  & > p {
    color: #fff;
    font-size: 21px;
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.6);
  }
  .top_box {
    flex: 1;
    display: flex;
    .yg_left {
      flex: 1;
      // background: cadetblue;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      padding: 25px 0;
      .yg_title {
        font-size: 15px;
        color: #fff;
        // text-shadow: 0 0 10px rgba(255, 255, 255, 0.6),
        //   0 0 20px rgba(255, 255, 255, 0.8);
      }
    }
    .yg_right {
      flex: 1;
      // background: brown;
    }
  }

  .bottom_box {
    flex: 1;
    color: #fff;
    display: flex;
    box-sizing: border-box;
    .bottom_left {
      box-sizing: border-box;
      flex: 1;
      // background: brown;
    }
    .bottom_right {
      flex: 2;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      // align-items: flex-end;
      // padding-right: 15px;
      box-sizing: border-box;
      .ys_title {
        font-size: 13px;
        // text-shadow: 0 0 10px rgba(255, 255, 255, 0.6),
        //   0 0 20px rgba(255, 255, 255, 0.8);
      }
    }
  }
}

.rightFromBox {
  // background-color: rgb(28, 155, 148);
  width: 100%;
  height: 100%;
  border: none;
  transform: rotateY(180deg);
  .rightFromTop {
    width: 100%;
    height: 80%;
    // background-color: #fff;
    .topFont {
      position: absolute;
      margin-top: 40px;
      width: 90%;
      .topFontTop {
        display: inline;
        color: #fff;
        font-size: 21px;
        // text-shadow: 0 0 10px rgba(255, 255, 255, 0.6);
        text-align: right;
      }
      .topFontTow {
        display: inline;
        color: #fff;
        margin-left: 40px;
        font-size: 13px;
        text-align: center;
        // text-shadow: 0 0 10px rgba(255, 255, 255, 0.6),
        //   0 0 20px rgba(255, 255, 255, 0.8);
      }
    }
  }

  .rightFromBotton {
    // position: absolute;
    width: 90%;
    height: 50%;
    // border: 1px solid #000;
    margin-top: -15px;
    .topFontTop {
      color: #fff;
      font-size: 21px;
      // text-shadow: 0 0 10px rgba(255, 255, 255, 0.6);
      text-align: right;
    }
  }
}

.round {
  margin: auto;
  width: 90%;
  height: 25%;
  display: flex;
  justify-content: space-around;
  .roundOne {
    width: 100px;
    height: 100px;

    .roundOnes {
      margin: auto;
      width: 70px;
      height: 70px;
      border-radius: 50%;
      background: url(../assets/rou.png);
      background-size: 100% 100%;
      margin-top: 20px;
      .roundOnesBai {
        position: absolute;
        font-size: 15px;
        color: #fff;
        margin-left: 10px;
        margin-top: 28px;
      }
    }
    .roundOnesFont {
      color: #fff;
      font-size: 14px;
      // text-shadow: 0 0 10px rgba(255, 255, 255, 0.6);
      text-align: center;
      margin-top: 5px;
    }
  }
  .roundTwo {
    width: 120px;
    height: 100px;

    .roundTwos {
      margin: auto;
      width: 70px;
      height: 70px;
      border-radius: 50%;
      // border: 5px solid rgb(42, 110, 255);
      background: url(../assets/rou.png);
      background-size: 100% 100%;
      margin-top: 20px;
      .roundTwosBai {
        position: absolute;
        font-size: 15px;
        color: #fff;
        margin-left: 10px;
        margin-top: 28px;
      }
    }
    .roundTwosFont {
      color: #fff;
      font-size: 14px;
      // text-shadow: 0 0 10px rgba(255, 255, 255, 0.6);
      text-align: center;
      margin-top: 5px;
    }
  }
  .roundThree {
    width: 100px;
    height: 100px;

    .roundThrees {
      margin: auto;
      width: 70px;
      height: 70px;
      border-radius: 50%;
      background: url(../assets/rou.png);
      background-size: 100% 100%;
      margin-top: 20px;
      .roundThreesBai {
        position: absolute;
        font-size: 15px;
        color: #fff;
        margin-left: 10px;
        margin-top: 28px;
      }
    }
    .roundThreesFont {
      color: #fff;
      font-size: 14px;
      // text-shadow: 0 0 10px rgba(255, 255, 255, 0.6);
      text-align: center;
      margin-top: 5px;
    }
  }
}

.map {
  width: 100%;
  height: 110%;
}
.num {
  width: 100%;
  padding: 0 50px;
  box-sizing: border-box;
}
.sr {
  width: 10px;
  position: absolute;
  bottom: 60px;
  right: 90px;
  line-height: 40px;
}
.b1 {
  width: 100%;
  height: 100%;
  // border: 1px solid #000;
}

.dashboardOne {
  width: 100%;
  height: 100%;
  // border: solid;
  .dashboardOneFont {
    font-size: 14px;
    color: #fff;
    margin-left: 35px;
    margin-top: -25px;
  }
}

.dashboardTwo {
  width: 100%;
  height: 100%;
  // border: solid;
  .dashboardTwoFont {
    font-size: 14px;
    color: #fff;
    margin-left: 35px;
    margin-top: -25px;
  }
}

.bingtu {
  width: 100%;
  height: 100px;
  border: solid;
}

.topFontTow {
  line-height: 10px;
  margin-top: 30px;
  color: #fff;
  margin-left: 40px;
  font-size: 18px;
  text-align: center;
  // text-shadow: 0 0 10px rgba(255, 255, 255, 0.6),
  //   0 0 20px rgba(255, 255, 255, 0.8);
}

.toptop {
  width: 100%;
  text-align: center;
  font-size: 18px;
  color: #fff;
  z-index: 4;
  margin-top: 10px;
}

.sfsfsf{
  margin-bottom: 20px;
}
</style>
