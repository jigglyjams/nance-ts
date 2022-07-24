const config = {
  nameId: 'juiceboxDAO',
  name: 'juiceboxDAO',
  scheme: ['notion', 'discord', 'snapshot'],
  proposalDataBackup: 'ipfs',
  ipfsGateway: 'https://gateway.pinata.cloud/ipfs',
  votingResultsDashboard: 'https://jbx-protocol.github.io/juice-snapshot-dashboard/',
  translation: {
    api: 'deepl',
    targetLanguage: 'zh',
    storage: {
      user: 'jigglyjams',
      repo: 'juicebox-governance'
    }
  },
  discord: {
    guildId: '775859454780244028',
    channelId: '873248745771372584',
    alertRole: '953865172764729404',
    poll: {
      votingTimeDays: 3,
      voteYesEmoji: '👍',
      voteNoEmoji: '👎',
      voteGoVoteEmoji: '🗳',
      votePassEmoji: '✅',
      voteCancelledEmoji: '❌',
      minYesVotes: 10,
      yesNoRatio: 0.3,
      showResults: true
    },
  },
  notion: {
    publicURLPrefix: 'juicebox.notion.site',
    database_id: '9d126f9148dc42ee83317d5cd74e4db4',
    propertyKeys: {
      proposalId: 'Juicebox Proposal ID',
      status: 'Status',
      statusTemperatureCheck: 'Temperature Check',
      statusVoting: 'Voting',
      statusApproved: 'Approved',
      statusCancelled: 'Cancelled',
      proposalIdPrefix: 'JBP-',
      discussionThread: 'Discussion Thread',
      ipfs: 'IPFS',
      vote: 'Snapshot'
    },
    removeTextFromProposal: '[_How to fill out this template_](/3d81e6bb330a4c869bddd0d6449ac032)_._\n',
    filters: { }
  },
  github: {
    user: 'jigglyjams',
    repo: 'juicebox-governance',
    propertyKeys: {
      title: 'Name',
      proposalId: 'Juicebox Proposal ID',
      status: 'Status',
      statusTemperatureCheck: 'Temperature Check',
      statusVoting: 'Voting',
      statusApproved: 'Approved',
      statusCancelled: 'Cancelled',
      proposalIdPrefix: 'JBP-',
      discussionThread: 'Discussion Thread',
      ipfs: 'Data Backup',
      vote: 'Voting',
      category: 'Category',
      governanceCycle: 'Funding Cycle'
    },
  },
  snapshot: {
    base: 'https://snapshot.org/#',
    space: 'jbdao.eth',
    choices: ['For', 'Against', 'Abstain'],
    votingTimeDays: 3,
    minTokenPassingAmount: 80E6,
    passingRatio: 0.66,
  },
};

config.notion.filters = {
  preDiscussion: {
    and: [
      {
        property: 'Status',
        select: {
          equals: 'Discussion',
        },
      },
      {
        property: config.notion.propertyKeys.discussionThread,
        url: {
          is_empty: true,
        }
      },
      {
        property: 'Name',
        title: {
          is_not_empty: true
        }
      }],
  },

  discussion: {
    and: [
      {
        property: 'Status',
        select: {
          equals: 'Discussion',
        },
      },
      {
        property: config.notion.propertyKeys.discussionThread,
        url: {
          is_not_empty: true,
        },
      },
      {
        property: 'Name',
        title: {
          is_not_empty: true
        }
      }],
  },

  proposalId: {
    property: config.notion.propertyKeys.proposalId,
    rich_text: {
      contains: config.notion.propertyKeys.proposalIdPrefix,
    },
  },

  temperatureCheck: {
    property: 'Status',
    select: {
      equals: 'Temperature Check',
    },
  },

  voting: {
    property: 'Status',
    select: {
      equals: 'Voting',
    },
  }
};

export default config;
