let app = new Vue({
  el: "#app",
  computed: {
    stepOrder() {
      return [1, 2, 3, 4, 5, ...this.sections, 13, 14, 15, 16];
    },
    step() {
      return this.stepOrder[this.stepInd];
    },
    canFile() {
      return true;
      return this.validCases.map((c) => c.valid).includes(true);
    },
    validCases() {
      // console.log("CHECK FOR ABC");
      const section_abc =
        this.sectionDetails[0].questions[3].value == true &&
        this.sectionDetails[0].questions[4].value == true &&
        (this.sectionDetails[0].questions[0].value == true ||
          this.sectionDetails[0].questions[1].value == true ||
          this.sectionDetails[0].questions[2].value == true);

      // console.log("CHECK FOR ABC");
      const section_d =
        this.sectionDetails[1].questions[3].value == true &&
        this.sectionDetails[1].questions[4].value == true &&
        this.sectionDetails[1].questions[0].value == true &&
        this.sectionDetails[1].questions[1].value == true &&
        this.sectionDetails[1].questions[2].value == true;

      // console.log("CHECK FOR ABC");
      const section_e =
        this.sectionDetails[2].questions[0].value == true &&
        this.sectionDetails[2].questions[1].value == true &&
        this.sectionDetails[2].questions[2].value == true &&
        this.sectionDetails[2].questions[3].value == true &&
        this.sectionDetails[2].questions[4].value == true &&
        this.sectionDetails[2].questions[5].value == true &&
        this.sectionDetails[2].questions[6].value == true;

      // console.log("CHECK FOR ABC");
      const section_f =
        this.sectionDetails[3].questions[2].value == true &&
        this.sectionDetails[3].questions[3].value == true &&
        (this.sectionDetails[3].questions[0].value == true ||
          this.sectionDetails[3].questions[1].value == true);

      // console.log("CHECK FOR ABC");
      const section_g =
        this.sectionDetails[4].questions[0].value == true &&
        this.sectionDetails[4].questions[4].value == true &&
        this.sectionDetails[4].questions[5].value == true &&
        (this.sectionDetails[4].questions[1].value == true ||
          this.sectionDetails[4].questions[2].value == true ||
          this.sectionDetails[4].questions[3].value == true);

      // console.log("CHECK FOR ABC");
      const section_h =
        this.sectionDetails[5].questions[5].value == true &&
        this.sectionDetails[5].questions[6].value == true &&
        (this.sectionDetails[5].questions[0].value == true ||
          this.sectionDetails[5].questions[1].value == true ||
          this.sectionDetails[5].questions[2].value == true ||
          this.sectionDetails[5].questions[3].value == true ||
          this.sectionDetails[5].questions[4].value == true);
      // console.log("CHECK FOR ABC");
      const section_i =
        this.sectionDetails[6].questions[0].value == true &&
        this.sectionDetails[6].questions[5].value == true &&
        this.sectionDetails[6].questions[6].value == true &&
        (this.sectionDetails[6].questions[1].value == true ||
          this.sectionDetails[6].questions[2].value == true ||
          this.sectionDetails[6].questions[3].value == true ||
          this.sectionDetails[6].questions[4].value == true);
      // console.log("CHECK FOR ABC");
      console.log(section_abc);
      return [
        {
          title: "section_abc",
          valid: section_abc,
          description:
            "(a/b/c) Physical Harm/ Threatening to cause physical harm/Attempting to cause Physical Harm",
        },
        {
          title: "section_d",
          valid: section_d,
          description: "(d) Placing you in fear of physical harm",
        },
        {
          title: "section_e",
          valid: section_e,
          description:
            "(e) Threatening to deprive/ depriving you or your child of custody of your family/ Depriving or threatening to deprive you of financial support/ Deliberately providing you insufficient support/ Depriving or threatening to deprive you of your legal rights/ Preventing you from engaging in any legitimate profession or occupation / Solely controlling conjugal or common properties",
        },
        {
          title: "section_f",
          valid: section_f,
          description:
            "(f) Controlling your actions by inflicting physical harm on him or herself",
        },
        {
          title: "section_g",
          valid: section_g,
          description:
            "(g) Causing or attempting to cause you to engage in any sexual activity by threat or force",
        },
        {
          title: "section_h",
          valid: section_h,
          description:
            "(h) Stalking or following you in public or private places/ Peering through your window/ Lingering outside your residence/ Entering or remaining in your dwelling or property against your will/ Destroying your property and personal belongings/ Inflicting harm to your animals or pets/ Engaging in any form of harassment or violence",
        },
        {
          title: "section_i",
          valid: section_i,
          description:
            "(i) Causing mental or emotional anguish/ public ridicule or humiliation to your or your child, including, (i.e. repeated verbal and emotional abuse/denial of financial support or custody of minor children of access to your child/children.)",
        },
      ];
    },
  },
  data: {
    stepInd: 8,
    sections: [],
    userDetails: {
      name: "",
      email: "",
      relationshipStatus: "",
      affidavitComplaint: [],
    },
    sectionDetails: [
      {
        title: "Physical Harm",
        slug: "s-ph-",
        questions: [
          {
            question:
              "Were you (or your child) physically harmed by the offender?",
            value: false,
          },
          {
            question:
              "Did the offender threaten to physically harm you (or your child)?",
            value: false,
          },
          {
            question:
              "Did the offender ever attempt to cause physical harm to you (or your child)?",
            value: false,
          },
          {
            question: "Was the act committed within 20 years from this date?",
            value: false,
          },
          {
            question:
              "Do you have proof of the marriage/dating or sexual relationship/filiation whichever is applicable?",
            value: false,
          },
        ],
      },
      {
        title: "Threat of Physical Harm",
        slug: "s-thp-",
        questions: [
          {
            question: "Is the offender threatening you or your child?",
            value: false,
          },
          {
            question: "Does the threat include physical harm?",
            value: false,
          },
          {
            question:
              "Does the threat place you and your child in fear of impending physical harm?",
            value: false,
          },
          {
            question: "Was the act committed within 20 years from this date?",
            value: false,
          },
          {
            question:
              "Do you have proof of the marriage/dating or sexual relationship/filiation whichever is applicable?",
            value: false,
          },
        ],
      },
      {
        title: "Deprivation of Custody",
        slug: "s-doc-",
        questions: [
          {
            question: "Did you have a romantic relationship with the offender?",
            value: false,
          },
          {
            question:
              "Did this romantic relationship result in the birth of a child?",
            value: false,
          },
          {
            question: "Was this child acknowledged by the offender?",
            value: false,
          },
          {
            question: "Was there failure to provide support? ",
            value: false,
          },
          {
            question: "Was the intent not to provide support apparent/obvious?",
            value: false,
          },
          {
            question: "Was the act committed within 20 years from this date?",
            value: false,
          },
          {
            question:
              "Do you have proof of the marriage/dating or sexual relationship/filiation whichever is applicable?",
            value: false,
          },
        ],
      },
      {
        title: "Physical Blackmail",
        slug: "s-pb-",
        questions: [
          {
            question:
              "Did the offender inflict physical harm on himself? Did the offender threaten to inflict physical harm on himself?",
            value: false,
          },
          {
            question:
              "Did the act pressure you to make actions or decisions against your will? Did the threat pressure you to make actions or decisions against your will?",
            value: false,
          },
          {
            question: "Was the act committed within 20 years from this date?",
            value: false,
          },
          {
            question:
              "Do you have proof of the marriage/dating or sexual relationship/filiation whichever is applicable?",
            value: false,
          },
        ],
      },
      {
        title: "Sexual Abuse",
        slug: "s-sa-",
        questions: [
          {
            question:
              "Did the offender cause or attempt to cause you or your child to engage in any sexual activity which does not constitute rape",
            value: false,
          },
          {
            question:
              "Was this done by force or threat of force against you or your child or your immediate family? ",
            value: false,
          },
          {
            question:
              "Was this done through physical harm inflicted on you or your child or your immediate family?",
            value: false,
          },
          {
            question:
              "Was this done through intimidation directed against you or your child or your immediate family?",
            value: false,
          },
          {
            question: "Was the act committed within 10 years from this date?",
            value: false,
          },
          {
            question:
              "Do you have proof of the marriage/dating or sexual relationship/filiation whichever is applicable?",
            value: false,
          },
        ],
      },
      {
        title: "Stalking",
        slug: "s-stk-",
        questions: [
          {
            question:
              "Did the offender stalk or follow you or your child in public or private places?",
            value: false,
          },
          {
            question:
              "Did the offender commit acts of peering in the window or lingering outside your residence?",
            value: false,
          },
          {
            question:
              "Did the offender enter or remain in your dwelling against your will?",
            value: false,
          },
          {
            question:
              "Did the offender destroy your property and personal belongings or inflict harm to your animals or pets?",
            value: false,
          },
          {
            question:
              "Did the offender engage in any form of harassment or violence?",
            value: false,
          },
          {
            question: "Was the act committed within 10 years from this date?",
            value: false,
          },
          {
            question:
              "Do you have proof of the marriage/dating or sexual relationship/filiation whichever is applicable?",
            value: false,
          },
        ],
      },
      {
        title: "Emotional Abuse",
        slug: "s-ema-",
        questions: [
          {
            question:
              "Did the offender cause mental or emotional anguish to you or your child?",
            value: false,
          },
          {
            question:
              "Was the anguish caused through acts of public ridicule or humiliation?",
            value: false,
          },
          {
            question: "Did you experience repeated verbal and emotional abuse?",
            value: false,
          },
          {
            question:
              "Did the offender deny you or your child of financial support ",
            value: false,
          },
          {
            question:
              "Did the offender deny you custody or access to your minor children?",
            value: false,
          },
          {
            question: "Was the act committed within 10 years from this date?",
            value: false,
          },
          {
            question:
              "Do you have proof of the marriage/dating or sexual relationship/filiation whichever is applicable?",
            value: false,
          },
        ],
      },
    ],
  },
  methods: {
    initializeSections() {
      this.sections = this.sections
        .map((s) => parseInt(s))
        .sort((a, b) => a - b);
      this.stepInd++;
    },
    fileUpload(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) this.userDetails.affidavitComplaint = [];
      else this.userDetails.affidavitComplaint = [true];
    },
  },
});
